import { useCallback, useEffect, useState, useContext } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useHistory } from "react-router-dom";
import { IonAlert } from "@ionic/react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface AuthFormProps {}

export default function LoginForm({}: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      history.push("/profile");
    }
  }, []);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!formData.username) {
        return toast.error("من فضلك ادخل اسم المستخدم");
      }
      if (!formData.password) {
        return toast.error("من فضلك ادخل كلمة المرور");
      }
      await axios.post("http://localhost:5000/login", formData);
      localStorage.setItem("username", formData.username);
      localStorage.setItem("password", formData.password);
      toast.success("تم تسجيل الدخول");
      history.push("/profile");
    } catch (error: any) {
      console.error(error);
      if (error.response.data.msg) {
        toast.error(error.response.data.msg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="username">اسم المستخدم</label>
            <Input
              className="border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="اسم المستخدم"
              type="text"
              id="username"
              onChange={handleChangeInput}
              name="username"
            />
          </div>

          <div className="">
            <label htmlFor="password">كلمة السر</label>
            <Input
              onChange={handleChangeInput}
              className="border-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="كلمة السر"
              name="password"
              type="password"
              id="password"
            />
          </div>

          <div className="">
            <Button disabled={isLoading} variant={"sky"} className="w-full">
              تسجيل الدخول
            </Button>
          </div>

          {/*      <IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isOpen}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert> */}
        </form>
      </div>
    </div>
  );
}
