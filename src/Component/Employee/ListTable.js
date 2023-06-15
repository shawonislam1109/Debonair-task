import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ListTable = ({rows , columns}) => {

    return (
        <div>
              <DataGrid
      sx={{
        width:'90%',
        mx: 'auto',
        mt: '50px'
        
      }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      
        </div>
    );
};

export default ListTable;