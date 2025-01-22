import { ReactNode } from "react";

interface Props {
  // text: string;
  // children: string;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dimissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;
