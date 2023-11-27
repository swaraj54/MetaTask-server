
export const helloWorld = async (req, res) => {
    try {
        const log = req.log;

        if (log.status === 'failure') {
            res.status(500).json({ success: false, error: 'Internal server error' });
        } else {
            res.status(200).json({ success: true, message: 'Hello, world!' });
        }
    } catch (error) {
        console.log(error, "error here")
        return res.status(500).json({ success: false, error: error })
    }
}