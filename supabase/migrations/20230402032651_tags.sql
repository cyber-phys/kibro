create table "public"."tags" (
    "id" uuid not null,
    "title" text not null,
    "category" text not null,
    "icon" text not null
);


CREATE UNIQUE INDEX tags_pkey ON public.tags USING btree (id);

alter table "public"."tags" add constraint "tags_pkey" PRIMARY KEY using index "tags_pkey";


