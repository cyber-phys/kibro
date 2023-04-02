alter table "public"."events" add column "tags" uuid[];

alter table "public"."events" alter column "id" set default uuid_generate_v4();

alter table "public"."tags" alter column "id" set default uuid_generate_v4();


