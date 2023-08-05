// Local imports
import Modal from "./Modal";

interface Props {
  className: string;
  content: string;
};

const AuthModal = ({ className, content }: Props) => {
  return (
    <Modal
      buttonContent={content}
      buttonClassName={className}
      modalTitle="Welcome back"
      modalDescription="Login to your account"
    >
      Auth
    </Modal>
  );
};

export default AuthModal;