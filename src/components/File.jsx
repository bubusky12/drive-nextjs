"use client"

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';

const FileList = () => {
  const files = [
    { name: 'Berbagi Folder', type: 'folder', category: '', modified: 'Kemaren 16:50', users: 3, size: '1.2 MB' },
    { name: 'Facturation', type: 'folder', category: '', modified: 'Kemaren 16:50', users: 1, size: '9.8 MB' },
    { name: 'Project saya', type: 'folder', category: '', modified: 'Kemaren 16:50', users: 1, size: '2 MB' },
    { name: 'File Gapenting', type: 'file', category: '', modified: '08 Januari 2022', users: 0, size: '9 MB' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Modified On</TableCell>
            <TableCell>Users</TableCell>
            <TableCell>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, index) => (
            <TableRow key={index}>
              <TableCell>
                {/* Ikon di Sebelah Kiri */}
                {file.type === 'folder' ? (
                  <FolderIcon style={{ marginRight: 8, color: 'orange' }} />
                ) : (
                  <InsertDriveFileIcon style={{ marginRight: 8, color: 'blue' }} />
                )}
                {file.name}
              </TableCell>
              <TableCell>{file.category}</TableCell>
              <TableCell>{file.modified}</TableCell>
              <TableCell>
                {Array.from({ length: file.users }).map((_, i) => (
                  <Avatar key={i} style={{ margin: '0 5px' }}>U</Avatar>
                ))}
              </TableCell>
              <TableCell>{file.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileList;