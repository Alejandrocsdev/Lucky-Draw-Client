// Libraries
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Vite Config
export default defineConfig(({ mode }) => {
  // cwd: current working directory
  const env = loadEnv(mode, process.cwd(), '')

  // Mode
  console.info('Mode:', mode)

  // Sandbox
  if (mode === 'development') {
    console.info('Sandbox URL:', `https://sandbox.minepi.com/app/${env.SANDBOX_SLUG}`)
  }

  // Domain Validation
  if (env.VALIDATE === 'true') {
    const filePath = path.resolve('public', 'validation-key.txt')
    fs.writeFileSync(filePath, env.VALIDATION_KEY)
    console.info('✅ validation-key.txt created')
  }

  return { plugins: [react()], server: { host: true, port: Number(env.PORT) } }
})
