
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."users"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "display_id" text NOT NULL, "display_name" text NOT NULL, "created_at" Timestamp NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("display_id"));

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."articles"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "subject" text NOT NULL, "content" Text NOT NULL, "author_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "published_at" timestamptz, PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
