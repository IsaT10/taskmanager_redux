import { useSelector } from 'react-redux';
import Modal from '../../ui/Modal';

export default function TaskDetailsModal({ id, isOpen, setIsOpen }) {
  const { tasks } = useSelector((state) => state.tasks);
  const task = tasks.find((el) => el.id === id);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <h3 className="text-xl font-semibold mb-5">{task?.title}</h3>
        <p className="">{task?.assignedTo}</p>
        <p>{task?.description}</p>
      </div>
    </Modal>
  );
}
