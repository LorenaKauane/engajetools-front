import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/components/ui/card';
import { Button } from '@ui/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const formSchema = z
  .object({
    name: z
      .string({
        required_error: 'Nome e obrigatório',
      })
      .min(3, 'Nome e obrigatório'),
    email: z
      .string({
        required_error: 'E-mail e obrigatório',
      })
      .email('E-mail invalido'),
    password: z
      .string({
        required_error: 'Senha e obrigatório',
      })
      .min(3, 'Senha e obrigatório'),
    confirmPassword: z
      .string({
        required_error: 'Senha e obrigatório',
      })
      .min(3, 'Senha e obrigatório'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas incorretas',
    path: ['confirmPassword'],
  });

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: signup
    console.log(values);
  }

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mt-5">
        <Card>
          <CardHeader className="flex items-center justify-center">
            <CardTitle>Criar conta</CardTitle>
            <CardDescription>
              Faça o cadastro para começar agora
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@email.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="*****" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Cadastrar
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant="link"
              onClick={() => navigate('/login')}
            >
              Ja tem conta? Fazer login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Signup;
