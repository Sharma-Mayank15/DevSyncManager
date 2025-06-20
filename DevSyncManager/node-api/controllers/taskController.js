exports.syncTask = (req, res) => {
    const { taskId, status } = req.body;
    console.log(`Task ${taskId} synced with status: ${status}`);
    res.status(200).json({ message: 'Task sync successful' });
};
