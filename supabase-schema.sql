-- Create queues table
CREATE TABLE queues (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  services TEXT[] NOT NULL,
  items JSONB DEFAULT '[]'::jsonb,
  "isActive" BOOLEAN DEFAULT true,
  "createdAt" BIGINT NOT NULL,
  "estimatedTimePerPerson" INTEGER DEFAULT 5
);

-- Enable Row Level Security
ALTER TABLE queues ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since no auth required)
CREATE POLICY "Allow all operations on queues" ON queues FOR ALL USING (true);