CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql" WITH SCHEMA "pg_catalog";
CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, created_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New User'),
    NOW()
  );
  
  INSERT INTO public.team_members (user_id, join_date)
  VALUES (NEW.id, NOW());
  
  RETURN NEW;
END;
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: channels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.channels (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: contact_submissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contact_submissions (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    user_id uuid,
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: goal_milestones; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.goal_milestones (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    goal_id uuid NOT NULL,
    title text NOT NULL,
    completed boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: goals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.goals (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    title text NOT NULL,
    description text,
    category text,
    priority text DEFAULT 'medium'::text,
    progress integer DEFAULT 0,
    deadline date,
    status text DEFAULT 'on-track'::text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT goals_progress_check CHECK (((progress >= 0) AND (progress <= 100)))
);


--
-- Name: message_reactions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.message_reactions (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    message_id uuid NOT NULL,
    user_id uuid NOT NULL,
    emoji text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    channel_id uuid NOT NULL,
    user_id uuid NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    full_name text,
    bio text,
    avatar_url text,
    role text,
    company text,
    location text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


--
-- Name: team_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_members (
    id uuid DEFAULT extensions.uuid_generate_v4() NOT NULL,
    user_id uuid NOT NULL,
    goals_count integer DEFAULT 0,
    completed_count integer DEFAULT 0,
    streak integer DEFAULT 0,
    expertise text[],
    status text DEFAULT 'offline'::text,
    join_date timestamp with time zone DEFAULT now()
);


--
-- Name: channels channels_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_name_key UNIQUE (name);


--
-- Name: channels channels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.channels
    ADD CONSTRAINT channels_pkey PRIMARY KEY (id);


--
-- Name: contact_submissions contact_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_submissions
    ADD CONSTRAINT contact_submissions_pkey PRIMARY KEY (id);


--
-- Name: goal_milestones goal_milestones_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.goal_milestones
    ADD CONSTRAINT goal_milestones_pkey PRIMARY KEY (id);


--
-- Name: goals goals_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.goals
    ADD CONSTRAINT goals_pkey PRIMARY KEY (id);


--
-- Name: message_reactions message_reactions_message_id_user_id_emoji_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_message_id_user_id_emoji_key UNIQUE (message_id, user_id, emoji);


--
-- Name: message_reactions message_reactions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: team_members team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_pkey PRIMARY KEY (id);


--
-- Name: team_members team_members_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_user_id_key UNIQUE (user_id);


--
-- Name: goals update_goals_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_goals_updated_at BEFORE UPDATE ON public.goals FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: profiles update_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: contact_submissions contact_submissions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contact_submissions
    ADD CONSTRAINT contact_submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;


--
-- Name: goal_milestones goal_milestones_goal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.goal_milestones
    ADD CONSTRAINT goal_milestones_goal_id_fkey FOREIGN KEY (goal_id) REFERENCES public.goals(id) ON DELETE CASCADE;


--
-- Name: goals goals_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.goals
    ADD CONSTRAINT goals_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: message_reactions message_reactions_message_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_message_id_fkey FOREIGN KEY (message_id) REFERENCES public.messages(id) ON DELETE CASCADE;


--
-- Name: message_reactions message_reactions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.message_reactions
    ADD CONSTRAINT message_reactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: messages messages_channel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.channels(id) ON DELETE CASCADE;


--
-- Name: messages messages_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: team_members team_members_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: contact_submissions Anyone can create contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can create contact submissions" ON public.contact_submissions FOR INSERT WITH CHECK (true);


--
-- Name: channels Channels are viewable by authenticated users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Channels are viewable by authenticated users" ON public.channels FOR SELECT TO authenticated USING (true);


--
-- Name: messages Messages are viewable by authenticated users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Messages are viewable by authenticated users" ON public.messages FOR SELECT TO authenticated USING (true);


--
-- Name: profiles Public profiles are viewable by everyone; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);


--
-- Name: message_reactions Reactions are viewable by authenticated users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Reactions are viewable by authenticated users" ON public.message_reactions FOR SELECT TO authenticated USING (true);


--
-- Name: team_members Team members are viewable by authenticated users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Team members are viewable by authenticated users" ON public.team_members FOR SELECT TO authenticated USING (true);


--
-- Name: messages Users can create messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create messages" ON public.messages FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: goal_milestones Users can create milestones for their goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create milestones for their goals" ON public.goal_milestones FOR INSERT WITH CHECK ((EXISTS ( SELECT 1
   FROM public.goals
  WHERE ((goals.id = goal_milestones.goal_id) AND (goals.user_id = auth.uid())))));


--
-- Name: goals Users can create own goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create own goals" ON public.goals FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: message_reactions Users can create reactions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can create reactions" ON public.message_reactions FOR INSERT TO authenticated WITH CHECK ((auth.uid() = user_id));


--
-- Name: goal_milestones Users can delete milestones of their goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete milestones of their goals" ON public.goal_milestones FOR DELETE USING ((EXISTS ( SELECT 1
   FROM public.goals
  WHERE ((goals.id = goal_milestones.goal_id) AND (goals.user_id = auth.uid())))));


--
-- Name: goals Users can delete own goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete own goals" ON public.goals FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: messages Users can delete own messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete own messages" ON public.messages FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: message_reactions Users can delete own reactions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can delete own reactions" ON public.message_reactions FOR DELETE USING ((auth.uid() = user_id));


--
-- Name: profiles Users can insert own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK ((auth.uid() = id));


--
-- Name: team_members Users can insert own team member profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can insert own team member profile" ON public.team_members FOR INSERT WITH CHECK ((auth.uid() = user_id));


--
-- Name: goal_milestones Users can update milestones of their goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update milestones of their goals" ON public.goal_milestones FOR UPDATE USING ((EXISTS ( SELECT 1
   FROM public.goals
  WHERE ((goals.id = goal_milestones.goal_id) AND (goals.user_id = auth.uid())))));


--
-- Name: goals Users can update own goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update own goals" ON public.goals FOR UPDATE USING ((auth.uid() = user_id));


--
-- Name: messages Users can update own messages; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update own messages" ON public.messages FOR UPDATE USING ((auth.uid() = user_id));


--
-- Name: profiles Users can update own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING ((auth.uid() = id));


--
-- Name: team_members Users can update own team member profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update own team member profile" ON public.team_members FOR UPDATE USING ((auth.uid() = user_id));


--
-- Name: goal_milestones Users can view milestones of their goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view milestones of their goals" ON public.goal_milestones FOR SELECT USING ((EXISTS ( SELECT 1
   FROM public.goals
  WHERE ((goals.id = goal_milestones.goal_id) AND (goals.user_id = auth.uid())))));


--
-- Name: contact_submissions Users can view own contact submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own contact submissions" ON public.contact_submissions FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: goals Users can view own goals; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view own goals" ON public.goals FOR SELECT USING ((auth.uid() = user_id));


--
-- Name: channels; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;

--
-- Name: contact_submissions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

--
-- Name: goal_milestones; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.goal_milestones ENABLE ROW LEVEL SECURITY;

--
-- Name: goals; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;

--
-- Name: message_reactions; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.message_reactions ENABLE ROW LEVEL SECURITY;

--
-- Name: messages; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: team_members; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--


