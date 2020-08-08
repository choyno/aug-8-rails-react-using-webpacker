import { call, getContext } from 'redux-saga/effects';

export default function* useMutation(mutation, data) {
  const client = yield getContext('client');

  return yield call(client.mutate, { mutation,
    variables: {
      ...data
    }
  });
}

