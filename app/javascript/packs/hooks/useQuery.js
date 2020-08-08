import { call, getContext } from 'redux-saga/effects';

export default function* useQuery(query, data) {
  const client = yield getContext('client');

  return yield call(client.query, { query,
    variables: {
      ...data
    }
  });
}

