/// <reference types="cypress" />
import { LoginPage } from "../page/loginPage";

const loginPage = new LoginPage();
describe('Login Test Suite', () => {
    it.only('TO verify the the login with valid credentials', () => {
       loginPage.visitPage();
       loginPage.enterCredentails('student', 'Password123');
       loginPage.verifyTheLogin();

       
    });
});