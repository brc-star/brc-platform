# Environment Variable Configuration: BRC STAR

| Variable Name | Required | Default / Example | Purpose |
| :--- | :--- | :--- | :--- |
| `NODE_ENV` | Yes | `production` | Application execution environment |
| `NEXT_PUBLIC_APP_URL` | Yes | `https://brcstar.in` | Base public canonical URL |
| `DATABASE_URL` | Yes | `postgresql://user:pass@host:5432/brcstar` | Primary PostgreSQL connection string |
| `REDIS_URL` | Optional | `redis://localhost:6379` | Redis caching & async queue broker |
| `JWT_SECRET` | Yes | `32+ character random string` | HMAC signing key for sessions |
| `DATA_ROOM_ENCRYPTION_KEY` | Yes | `256-bit AES master key` | NDA watermarking & document encryption |
