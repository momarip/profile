"use client";
import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { isValidAvatarFile } from "@/shared/utils/avatarValidation";

const ProfileForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };


  const handleAvatarClick = () => {
    document.getElementById("avatar-upload")?.click();
  };
  const handleAvatarChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    avatar: string
  ): void => {
    const file = event.target.files?.[0];
    if (file && isValidAvatarFile(file)) {
      const imageUrl = file.name;
      setAvatar(imageUrl);
      setAvatarUrl(URL.createObjectURL(file));
    } else {
      alert("Invalid file format. Please upload a JPG, JPEG, or PNG image.");
    }
  };
  

  const handleSave = () => {
    console.log(name);
    console.log(avatar);
  };

  return (

    <Box mt={3}>
      <form>
      <Box position="relative" overflow="hidden" borderRadius="10px">
        <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
            src={avatarUrl}
            alt="User Avatar"
            sx={{ marginTop: 5, width: 100, height: 100, cursor: "pointer" }}
            onClick={handleAvatarClick}
        />
        <input
            style={{ display: "none" }}
            id="avatar-upload"
            type="file"
            onChange={(e)=>handleAvatarChange(e, e.target.value)}
        />
        </Box>
        </Box>
        <TextField
          label="Full Name"
          name="fullName"
          required
          value={name}
          onChange={handleNameChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Box mt={2}>
          <TextField
            label="Email"
            value={"momarip.el.yousfi@gmail.com"}
            variant="outlined"
            fullWidth
            disabled
          />
          <TextField
            label="Joining Date"
            value={new Date().toLocaleDateString()}
            variant="outlined"
            fullWidth
            disabled
            sx={{ mt: 2 }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
        >
          Save Changes
        </Button>
      </form>
    </Box>
  );
};

export default ProfileForm;
