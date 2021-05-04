## Getting Started

```bash

docker-compose up [-d]

yarn hasura console --project hasura

yarn dev

# NOTE: migration status
yarn hasura --project hasura migrate status

# NOTE: migration squash
yarn hasura --project hasura migrate squash --name "create-xxxxs-xxxxs" --from xxxxxxxxxxxxx

# NOTE: migration 実行
yarn hasura --project hasura migrate apply --skip-execution --version xxxxxxxxxxxxx

# NOTE: test watch
yarn jest --watch
```
