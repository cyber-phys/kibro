create type "public"."gender" as enum ('male', 'female', 'non-binary');

create table "public"."users" (
    "id" uuid not null,
    "first_name" text not null,
    "gender" gender not null,
    "birthday" date not null,
    "home_city" text not null
);


CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."users" add constraint "users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

alter table "public"."users" validate constraint "users_id_fkey";


