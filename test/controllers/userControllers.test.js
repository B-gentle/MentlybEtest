const httpMocks = require("node-mocks-http");
const { signup } = require("../../controllers/userControllers");
const User = require("../../models/userModel");
const generateToken = require("../../utils/generateToken");
const asyncHandler = require("../../middleware/asyncHandler");

jest.mock("../../models/userModel"); // Mock User model
jest.mock("../../utils/generateToken"); // Mock generateToken

describe("signup Controller - Should Register a user", () => {
  it("should create a user and return 201 with user data", async () => {
    const req = {
      body: {
        name: "Jimmy Godwin",
        email: "jimmy@mently.com",
        role: "Admin",
        password: "123456",
      },
    };

    const res = httpMocks.createResponse();

    // Mock database calls
    User.findOne.mockResolvedValue(null); // User does not exist
    User.create.mockResolvedValue({
      _id: "1",
      name: "Jimmy Godwin",
      email: "jimmy@mently.com",
      role: "Admin",
      password: "123456",
    });

    // Mock token generation
    generateToken.mockImplementation(() => "mock-token");

    // Call the signup function
    await signup(req, res);

    // assertions
    expect(User.findOne).toHaveBeenCalledWith({ email: "jimmy@mently.com" });
    expect(User.create).toHaveBeenCalledWith({
      name: "Jimmy Godwin",
      email: "jimmy@mently.com",
      role: "Admin",
      password: "123456",
    });
    expect(generateToken).toHaveBeenCalledWith(res, "1");
    expect(res.statusCode).toBe(201);
    expect(res._getJSONData()).toEqual({
      _id: "1",
      name: "Jimmy Godwin",
      email: "jimmy@mently.com",
      role: "Admin",
    });
  });

      it('should return 400 if fields are missing', async () => {
        const req = httpMocks.createRequest({
          body: {
            name: '',
            email: '',
            role: '',
            password: '',
          },
        });
        const res = httpMocks.createResponse();

        await expect(signup(req, res)).rejects.toThrow('Please fill in all fields');
        expect(res.statusCode).toBe(400);
      });

      it('should return 400 if user already exists', async () => {
        const req = httpMocks.createRequest({
          body: {
            name: 'Jimmy Godwin',
            email: 'jimmygodwin@mently.test',
            role: 'Admin',
            password: '123456',
          },
        });
        const res = httpMocks.createResponse();

        User.findOne.mockResolvedValue({ email: 'jimmygodwin@mently.test' }); // User exists

        await expect(signup(req, res)).rejects.toThrow('User already exists');
        expect(res.statusCode).toBe(400);
      });
});
