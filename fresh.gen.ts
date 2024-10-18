// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_api_keys_decrypt from "./routes/api/api-keys/decrypt.ts";
import * as $api_api_keys_encrypt from "./routes/api/api-keys/encrypt.ts";
import * as $audio_create_speech from "./routes/audio/create-speech.tsx";
import * as $audio_create_transcription from "./routes/audio/create-transcription.tsx";
import * as $audio_create_translation from "./routes/audio/create-translation.tsx";
import * as $index from "./routes/index.tsx";
import * as $moderations_create_moderation from "./routes/moderations/create-moderation.tsx";
import * as $Alert from "./islands/Alert.tsx";
import * as $ApiKeyConfigure from "./islands/ApiKeyConfigure.tsx";
import * as $ButtonDonate from "./islands/ButtonDonate.tsx";
import * as $CreateModerationForm from "./islands/CreateModerationForm.tsx";
import * as $CreateTranscriptionForm from "./islands/CreateTranscriptionForm.tsx";
import * as $CreateTranslationForm from "./islands/CreateTranslationForm.tsx";
import * as $File from "./islands/File.tsx";
import * as $FormCreateSpeech from "./islands/FormCreateSpeech.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/api-keys/decrypt.ts": $api_api_keys_decrypt,
    "./routes/api/api-keys/encrypt.ts": $api_api_keys_encrypt,
    "./routes/audio/create-speech.tsx": $audio_create_speech,
    "./routes/audio/create-transcription.tsx": $audio_create_transcription,
    "./routes/audio/create-translation.tsx": $audio_create_translation,
    "./routes/index.tsx": $index,
    "./routes/moderations/create-moderation.tsx":
      $moderations_create_moderation,
  },
  islands: {
    "./islands/Alert.tsx": $Alert,
    "./islands/ApiKeyConfigure.tsx": $ApiKeyConfigure,
    "./islands/ButtonDonate.tsx": $ButtonDonate,
    "./islands/CreateModerationForm.tsx": $CreateModerationForm,
    "./islands/CreateTranscriptionForm.tsx": $CreateTranscriptionForm,
    "./islands/CreateTranslationForm.tsx": $CreateTranslationForm,
    "./islands/File.tsx": $File,
    "./islands/FormCreateSpeech.tsx": $FormCreateSpeech,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
