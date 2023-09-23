"use client";
import { useEffect, useState } from "react";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  uid: string;
  token: string;
}

export default function Activate({ params }:any) {
  const router = useRouter();
  const { uid, token } = params;
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [activation] = useActivationMutation();
  useEffect(() => {
    activation({ uid, token })
      .unwrap()
      .then(() => {
        toast.success("Account is activated");
        setisLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        router.push("/auth/login");
      });
  }, []);
  return (
    <div className=" w-4/5 mx-auto flex justify-center items-center h-[80vh]">
      <div>
        {isLoading ? (
          <h2 className="font-bold text-xl"> The Account is activating...</h2>
        ) : (
          <h2 className="font-bold text-xl"> The Account is Activated</h2>
        )}
      </div>
    </div>
  );
}
