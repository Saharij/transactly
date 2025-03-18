'use client'

import { AgGridReact } from 'ag-grid-react'

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

ModuleRegistry.registerModules([AllCommunityModule])

export function DataGrid() {
  return (
    <div className="h-[750px] w-3xl rounded-[8px] shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),0px_-2px_6px_0px_rgba(10,37,64,0.35)_inset]">
      <AgGridReact
        columnDefs={[{ field: 'name' }, { field: 'age' }, { field: 'country' }]}
        rowData={[
          { name: 'John Smith', age: 34, country: 'England' },
          { name: 'Nick', age: 31, country: 'Ukraine' },
        ]}
      />
    </div>
  )
}
