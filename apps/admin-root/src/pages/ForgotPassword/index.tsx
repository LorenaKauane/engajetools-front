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

const formSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail e obrigatório',
    })
    .email('E-mail invalido'),
});

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: forgot
    console.log(values);
  }

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mt-5">
        <Card>
          <CardHeader className="flex items-center justify-center">
            <CardTitle> Esqueceu a senha?</CardTitle>
            {/* <CardDescription> Faça login em sua conta</CardDescription> */}
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                <Button className="w-full" type="submit">
                  Solicitar nova senha
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

export default ForgotPassword;
