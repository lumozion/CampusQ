-- Create queues table
CREATE TABLE queues (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  services TEXT[] NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at BIGINT NOT NULL,
  estimated_time_per_person INTEGER DEFAULT 5
);

-- Create queue_items table
CREATE TABLE queue_items (
  id TEXT PRIMARY KEY,
  queue_id TEXT REFERENCES queues(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  service TEXT NOT NULL,
  details TEXT DEFAULT '',
  timestamp BIGINT NOT NULL,
  position INTEGER NOT NULL
);

-- Enable Row Level Security
ALTER TABLE queues ENABLE ROW LEVEL SECURITY;
ALTER TABLE queue_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since no auth required)
CREATE POLICY "Allow all operations on queues" ON queues FOR ALL USING (true);
CREATE POLICY "Allow all operations on queue_items" ON queue_items FOR ALL USING (true);