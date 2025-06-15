// Libraries
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Vite Config
export default defineConfig(({ mode }) => {
  // cwd: current working directory
  const env = loadEnv(mode, process.cwd(), '')
  const { SANDBOX_URL, SANDBOX_SLUG, VALIDATE, VALIDATION_KEY, PORT } = env

  // Mode
  console.info('Mode:', mode)

  // Sandbox
  if (mode === 'development') {
    console.info('Sandbox URL:', `${SANDBOX_URL}/app/${SANDBOX_SLUG}`)
  }

  // Domain Validation
  if (VALIDATE === 'true') {
    const filePath = path.resolve('public', 'validation-key.txt')
    fs.writeFileSync(filePath, VALIDATION_KEY)
    console.info('✅ validation-key.txt created')
  }

  return { plugins: [react()], server: { host: true, port: Number(PORT) } }
})
