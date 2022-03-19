import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	"https://xpokqhtivwpwxxgtzsbj.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhwb2txaHRpdndwd3h4Z3R6c2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyNzY2OTYsImV4cCI6MTk2MTg1MjY5Nn0.knLUAQQMEQudA-5xT5xqKnkf9zEsPA6s59hIiXWqhCI"
	)

export default supabase