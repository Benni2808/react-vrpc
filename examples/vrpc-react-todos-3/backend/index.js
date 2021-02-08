const { VrpcAdapter, VrpcAgent } = require('vrpc')
// Adapts the code and makes it remotely callable
VrpcAdapter.register('./src/Todo')
VrpcAdapter.register('./src/Todo1')
VrpcAdapter.register('./src/Todo2')

async function main () {
  try {
    const vrpcAgent = new VrpcAgent({
      agent: 'example-base-backend',
      domain: 'public.vrpc'
    })
    await vrpcAgent.serve()
  } catch (err) {
    console.log('VRPC triggered an unexpected error', err)
  }
}

// Start the agent
main()
