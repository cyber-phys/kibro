create table "public"."userevents" (
    "user_id" uuid not null,
    "event_id" uuid not null
);


CREATE UNIQUE INDEX userevents_pkey ON public.userevents USING btree (user_id, event_id);

alter table "public"."userevents" add constraint "userevents_pkey" PRIMARY KEY using index "userevents_pkey";

alter table "public"."userevents" add constraint "userevents_event_id_fkey" FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE not valid;

alter table "public"."userevents" validate constraint "userevents_event_id_fkey";

alter table "public"."userevents" add constraint "userevents_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."userevents" validate constraint "userevents_user_id_fkey";


