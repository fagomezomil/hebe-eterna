'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import userRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";


const RegisterModal = () => {
    const RegisterModal = userRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                RegisterModal.onClose();
            })
            .catch((error) => {
                toast.error('Algo no estuvo bien, prueba nuevamente');
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Registrate para dejar tu mensaje"
                subtitle="Podes después de registrarte escribir tu mensaje a nuestra querida Hebe, para que quede en la memoria de todos cuanto la amabams"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button 
            outline 
            label="Continue with Google"
            icon={FcGoogle}
            onClick={() => signIn('google')} 
          />
          
          <div 
            className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
            "
          >
           
          </div>
        </div>
      )
    

    return (
        <Modal
            disabled={isLoading}
            isOpen={RegisterModal.isOpen}
            title="Registrate para poder dejar tu Mensaje"
            actionLabel="Continue"
            onClose={RegisterModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;