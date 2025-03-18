'use client'
import { useEffect } from 'react'

import { logo } from '@/views/icons'
import { DataGrid } from '@/views/features'
import { Button, Stack } from '@/views/components'

import { loadUsers } from '@/models/firebase'

export default function Home() {
  useEffect(() => {
    loadUsers().then(res => console.log(res))
  }, [loadUsers])

  return (
    <Stack direction="row" className="w-[100%] h-[100%]">
      <Button
        onClick={() => {
          loadUsers()
        }}
        label="Click me mot"
      />
      <h1 className="text-3xl font-mono font-">Hello world!</h1>

      <svg className="w-[50px] h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d={logo} />
      </svg>

      <DataGrid />
    </Stack>
  )
}
