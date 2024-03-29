
import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from '@/lib/prisma'
import bcryptjs from 'bcryptjs'
 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/nueva-cuenta'
  },
  callbacks: {
    jwt( {token, user}) {
      return token 
    },
    session({session, token, user}){
      // console.log({session, token, user})
      return session
    }
  },
  providers: [
    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);


          if ( !parsedCredentials.success ) return null;

          const { email, password } = parsedCredentials.data;


          // Buscar el correo
          const usuario = await prisma.usuario.findUnique({ where: { email: email.toLowerCase() } });
          if ( !usuario ) return null;

          // Comparar las contraseñas
          if( !bcryptjs.compareSync( password, usuario.password ) ) return null;


          // Regresar el usuario sin el password
          const { password: _, ...rest } = usuario;

          console.log({rest})

          return rest;
      },
    }),
  ]
} 

export const {signIn, signOut, auth, handlers } = NextAuth(authConfig)