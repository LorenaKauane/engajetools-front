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

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: passwordReset
    console.log(values);
  }

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mt-5">
        <Card>
          <CardHeader className="flex items-center justify-center">
            <CardTitle> Cadastre sua nova senha</CardTitle>
            <CardDescription> Cadastre sua nova senha</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
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
                  Salvar nova senha
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
              Fazer login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default PasswordReset;
