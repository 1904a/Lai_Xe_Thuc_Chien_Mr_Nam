import { createClient } from '@supabase/supabase-js'

// Lấy các giá trị này trong Settings -> API của Supabase
const supabaseUrl = 'https://aybkkuhsmtzytnurpnjh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5YmtrdWhzbXR6eXRudXJwbmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMzMzNDMsImV4cCI6MjA5MDgwOTM0M30.2rojSxpGDEeapv7u1x5wJ_4ZTtdDMAD5F8_D2k6O_JI' // Sử dụng anon public key

export const supabase = createClient(supabaseUrl, supabaseKey)