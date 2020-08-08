# Battlecry Redux Ducks Usage

## Create Module
`npx battlecry g duck [filename] [action]` <br />
action must be in camelcase for multiple word action <br />
example: `npx battlecry g duck module1 sampleGet`

to add another function for the same module, use the same filename <br />
`npx battlecry g duck module1 sampleGet002`

### Files generated
find in
`src/store/redux/modules/[filename]` <br />
Expected Files based from the example
<ul>
  <li>module1Actions.js</li>
  <li>module1Reducer.js</li>
  <li>module1Saga.js</li>
  <li>module1Types.js</li>
</ul>
<br />

Combined reducer imports
`src/store/redux/index` <br />

Saga imports <br />
`src/store/saga`

