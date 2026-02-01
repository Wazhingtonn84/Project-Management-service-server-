import express from "express";
import { addMember, getUserWorkspaces } from "../controllers/workspaceController";

const workspaceRouter = express.Router();

// Define workspace-related routes here
workspaceRouter.get("/", getUserWorkspaces);
workspaceRouter.get("/add-member", addMember);

export default workspaceRouter;
