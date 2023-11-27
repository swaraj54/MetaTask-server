import Log from "../modals/log.modal.js";

export const analyticsData = async (req, res) => {
    try {
        const { timeRange } = req.query;
        let startDate, endDate;

        switch (timeRange) {
            case 'last24hours':
                startDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
                endDate = new Date();
                break;
            case 'last7days':
                startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                endDate = new Date();
                break;
            default:
                startDate = new Date(req.query.timeRange.startDate);
                endDate = new Date(req.query.timeRange.endDate);
        }

        const graphData = await Log.find({
            timestamp: { $gte: startDate, $lte: endDate },
        });

        const tableData = await Log.find({
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: 'asc' });

        const formattedTableData = tableData.map(log => ({
            userId: log.userId,
            timestamp: log.timestamp,
            status: log.status,
            errorMessage: log.status === 'failure' ? log.errorMessage : undefined,
            request: log.request,
            response: log.response,
        }));

        const finalData = {
            graphData: {
                users: graphData.length,
                calls: graphData.filter((log) => log.status === 'success').length,
                failures: graphData.filter((log) => log.status === 'failure').length,
            },
            tableData: formattedTableData,
        };

        res.status(200).json({ success: true, data: finalData });
    } catch (error) {
        console.error('Error fetching graph data:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export const tableData = async (req, res) => {
    try {


    } catch (error) {
        console.error('Error fetching graph data:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

