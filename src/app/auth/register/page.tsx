"use client";
import Spinner from "@/components/Spinner";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

interface Form {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  re_password: string;
}

const register = () => {
  const router = useRouter();
  const [FormData, setFormData] = useState<Form>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    re_password: "",
  });
  const [formErrorData, setformErrorData] = useState<any[]>([]);
  const { first_name, last_name, email, phone_number, password, re_password } =
    FormData;
  const [registerByForm, { isLoading }] = useRegisterMutation();

  const formOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerByForm({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      re_password,
    })
      .unwrap()
      .then(() => {
        toast.success("Please check your email to verify account.");
        router.push("/auth/login");
      })
      .catch((error: any) => {
        toast.error(`Error in one or more fields`);
        setformErrorData(error.data);
      });
  };

  return (
    <div className="h-full">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            width={200}
            height={200}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" method="POST" onSubmit={onSubmitForm}>
            <div className="flex gap-2">
              <div className="lg:w-[50%]">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="first_name"
                    required
                    value={first_name}
                    onChange={formOnChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   {
                  formErrorData.first_name? (<div className="text-red-600">{formErrorData.first_name}</div>): (<> </>)
                }
                </div>
              </div>

              <div className="lg:w-[50%]">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="last_name"
                    required
                    value={last_name}
                    onChange={formOnChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   {
                  formErrorData.last_name? (<div className="text-red-600">{formErrorData.last_name}</div>): (<> </>)
                }
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={formOnChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {
                  formErrorData.email? (<div className="text-red-600">{formErrorData.email}</div>): (<> </>)
                }
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  autoComplete="phone_number"
                  required
                  value={phone_number}
                  onChange={formOnChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {
                  formErrorData.phone_number? (<div className="text-red-600">{formErrorData.phone_number}</div>): (<> </>)
                }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={formOnChange}
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {
                  formErrorData.password? (<div className="text-red-600">{formErrorData.password}</div>): (<> </>)
                }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="re_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="re_password"
                  name="re_password"
                  type="password"
                  autoComplete="re_password"
                  value={re_password}
                  onChange={formOnChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {
                  formErrorData.re_password? (<div className="text-red-600">{formErrorData.re_password}</div>): (<> </>)
                }
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <Spinner /> : "Sign up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default register;
