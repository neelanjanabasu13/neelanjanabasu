DROP POLICY "Anyone can send an inquiry" ON public.work_inquiries;
CREATE POLICY "Anyone can send a valid inquiry" ON public.work_inquiries FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(email) <= 255
  AND engagement IN ('Workflow Audit','1:1 Advisory','Custom Build')
  AND char_length(btrim(details)) BETWEEN 1 AND 2000
);