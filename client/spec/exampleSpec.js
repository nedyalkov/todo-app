import TaskService from '../services/taskService'

describe('test the test', () => {
    it('should pass', () => {
        expect(1).toBe(1);
    });

    it('should fail', () => {
        expect(1).toBe(2);
    });

    it('shoud create and items', () => {
        const taskService = new TaskService();
        const tasks = taskService.getTasks();

        expect(tasks.length).toBe(1);
    });
});