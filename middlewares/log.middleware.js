import Log from './../modals/log.modal.js';

export const logMiddleware = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        if (!userId) return res.status(401).json({ success: false, message: "User id is required." });

        const randomFailure = Math.random() < 0.2;
        const log = new Log({
            userId: userId,
            timestamp: new Date(),
            status: randomFailure ? 'failure' : 'success',
            errorMessage: randomFailure ? 'Simulated failure message' : undefined,
            request: {
                method: req.method,
                url: req.originalUrl,
                params: req.query,
            },
            response: {
                status: res.statusCode,
                headers: res.getHeaders(),
            },
        });

        await log.save();

        req.log = log;

        next();

    } catch (error) {
        console.log(error, "error in middleware")
        return res.status(500).json({ success: false, error: error });
    }
};