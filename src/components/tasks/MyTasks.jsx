import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../ui/Modal';
import { useEffect, useState } from 'react';
import TaskDetailsModal from './TaskDetailsModal';
import { updateTask, userTasks } from '../../redux/feature/tasks/tasksSlice';

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskID, setTaskID] = useState('');
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.users);
  const { tasks, userSpecificTasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(userTasks(name));
  }, [name, dispatch, tasks]);

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskID} />
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setTaskID(item.id);
                  }}
                  className="grid place-content-center"
                  title="Details"
                >
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={() =>
                    dispatch(updateTask({ id: item.id, status: 'done' }))
                  }
                  className="grid place-content-center"
                  title="Done"
                >
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTasks;
