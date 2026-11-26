CREATE TABLE public.work_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  engagement text NOT NULL CHECK (engagement IN ('Workflow Audit','1:1 Advisory','Custom Build')),
  details text NOT NULL CHECK (char_length(details) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.work_inquiries TO anon, authenticated;
GRANT ALL ON public.work_inquiries TO service_role;
ALTER TABLE public.work_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can send an inquiry" ON public.work_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);