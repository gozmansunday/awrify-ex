import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// Local imports
import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

interface Props {
  className: string;
  content: string;
};

const AuthModal = ({ className, content }: Props) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = () => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Modal
      buttonContent={content}
      buttonClassName={className}
      modalTitle="Welcome back"
      modalDescription="Login to your account"
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#15D15599",
                brandAccent: "#15D15566",
              }
            }
          }
        }}
      />
    </Modal>
  );
};

export default AuthModal;