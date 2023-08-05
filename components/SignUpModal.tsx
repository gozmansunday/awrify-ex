import { BsGoogle } from "react-icons/bs";

// Local imports
import Modal from "./Modal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  className: string;
  content: string;
};

const SignUpModal = ({ className, content }: Props) => {
  const handleInputChange = () => {

  };

  return (
    <Modal
      buttonContent={content}
      buttonClassName={className}
      modalTitle="Create your account"
    >
      <div className="w-full flex items-center justify-center gap-3 py-3 rounded-md text-light bg-neutral-800 hover:bg-neutral-700">
        <BsGoogle />
        <p className="text-sm pt-0.5">Continue with Google</p>
      </div>

      <div className="relative flex items-center justify-center border-t border-neutral-700 text-light">
        <p className="absolute text-xs bg-dark p-1">OR</p>
      </div>

      <form className="flex flex-col gap-6">
        {/* Email Address */}
        <section className="space-y-1">
          <label htmlFor="email" className="text-sm">Email Address</label>
          <Input type="email" id="email" name="email" required
            className="bg-inherit border-neutral-600 transition"
            placeholder="example@email.com"
            onChange={handleInputChange}
          />
        </section>

        {/* Password */}
        <section className="space-y-1">
          <label htmlFor="password" className="text-sm">Password</label>
          <Input type="password" id="password" name="password" required
            className="bg-inherit border-neutral-600 transition"
            onChange={handleInputChange}
          />
        </section>

        <Button className="w-full py-6 mt-2 bg-brand text-darkest hover:bg-lightest">
          Sign up
        </Button>
      </form>

      <Button className="flex flex-col gap-2 text-center text-xs text-mid py-0 -mt-2 mb-2 shadow-none">
        <p className="underline">Send a magic link email</p>
        <p className="underline">Already have an account? Log in</p>
      </Button>
    </Modal>
  );
};

export default SignUpModal;