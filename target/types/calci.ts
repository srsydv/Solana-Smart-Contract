/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/calci.json`.
 */
export type Calci = {
  "address": "FrYZABVkq3TuCnSrhq437qvEBdF4Bi1grBAeLD8yZcrm",
  "metadata": {
    "name": "calci",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "add",
      "discriminator": [
        41,
        249,
        249,
        146,
        197,
        111,
        56,
        181
      ],
      "accounts": [
        {
          "name": "calciAcc",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "a",
          "type": "u8"
        },
        {
          "name": "b",
          "type": "u8"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "feePayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "calciAcc",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "calciResult",
      "discriminator": [
        65,
        163,
        124,
        193,
        5,
        112,
        6,
        188
      ]
    }
  ],
  "types": [
    {
      "name": "calciResult",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "calciResult",
            "type": "u8"
          },
          {
            "name": "payer",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};
