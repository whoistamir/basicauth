CREATE TABLE users(
  id UUID default uuid_generate_v4() UNIQUE PRIMARY KEY, 
  username VARCHAR(64) UNIQUE NOT NULL, 
  email VARCHAR(64) UNIQUE NOT NULL, 
  password VARCHAR(64) NOT NULL, 
  created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sessions(
  id UUID default uuid_generate_v4() UNIQUE PRIMARY KEY, 
  user_id UUID NOT NULL, 
  created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(), 
  FOREIGN KEY (user_id) REFERENCES users(id)
);