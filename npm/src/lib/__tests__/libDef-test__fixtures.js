export const flowVersionsFixture = {
  "kefir_v3.x.x": [
      { "name": "flow_>=v0.20.x", },
      { "name": "test_kefir-v3.js", }
  ],
  "mori_v0.3.x": [
      { "name": "flow_>=v0.22.x", },
      { "name": "flow_>=v0.18.x", },
      { "name": "test_mori-v0.3.x.js", }
  ]
}

export const definitionsFixture = [
  {
    "name": ".cli-metadata.json",
    "path": "definitions/.cli-metadata.json",
    "sha": "39ecf6ab460eab3fce0274f9fca31e45072abdd9"
  },
  {
    "name": "kefir_v3.x.x",
    "path": "definitions/kefir_v3.x.x",
    "sha": "b1d168687e6f87568aeee2f8684a62ae4975d0d0"
  },
  {
    "name": "mori_v0.3.x",
    "path": "definitions/mori_v0.3.x",
    "sha": "99d6bd549a2777ab3e0813649d408126620df546"
  }
]
