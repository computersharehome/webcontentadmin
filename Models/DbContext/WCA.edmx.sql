
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/29/2016 11:49:44
-- Generated from EDMX file: E:\visualstudio2013Projects\MvcApplication1\Models\DbContext\WCA.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Web_eIndicator];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[CompanyConfigs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CompanyConfigs];
GO
IF OBJECT_ID(N'[dbo].[CompanyDataExports]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CompanyDataExports];
GO
IF OBJECT_ID(N'[dbo].[Participants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Participants];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'CompanyConfigs'
CREATE TABLE [dbo].[CompanyConfigs] (
    [CompanyID] int  NOT NULL,
    [COY] nvarchar(25)  NULL,
    [CompanyName] nvarchar(250)  NOT NULL,
    [CompanyLogo] uniqueidentifier  NULL,
    [PhoneNumber_IsVisible] bit  NULL,
    [PhoneNumber_IsRequired] bit  NULL,
    [DOB_IsVisible] bit  NULL,
    [DOB_IsRequired] bit  NULL,
    [Location_IsVisible] bit  NULL,
    [Location_IsRequired] bit  NULL,
    [EmployeeId_Name] nvarchar(50)  NULL,
    [CustomText1Visible] bit  NULL,
    [CustomText1Required] bit  NULL,
    [CustomText1DefName] nvarchar(250)  NULL,
    [CustomText2Visible] bit  NULL,
    [CustomText2Required] bit  NULL,
    [CustomText2DefName] nvarchar(250)  NULL,
    [CustomText3Visible] bit  NULL,
    [CustomText3Required] bit  NULL,
    [CustomText3DefName] nvarchar(250)  NULL,
    [CustomText4Visible] bit  NULL,
    [CustomText4Required] bit  NULL,
    [CustomText4DefName] nvarchar(250)  NULL,
    [CustomText5Visible] bit  NULL,
    [CustomText5Required] bit  NULL,
    [CustomText5DefName] nvarchar(250)  NULL,
    [CustomDateTime1Visible] bit  NULL,
    [CustomDateTime1Required] bit  NULL,
    [CustomDateTime1DefName] nvarchar(250)  NULL,
    [CustomDateTime2Visible] bit  NULL,
    [CustomDateTime2Required] bit  NULL,
    [CustomDateTime2DefName] nvarchar(250)  NULL,
    [FileSendFrequency] nvarchar(20)  NULL,
    [AllowUpdate] bit  NULL,
    [AllowDelete] bit  NULL,
    [CreatedBy] nvarchar(50)  NULL,
    [CreatedDateTime] datetime  NULL,
    [UpdatedBy] nvarchar(50)  NULL,
    [UpdatedDateTime] datetime  NULL,
    [LastExtractionDate] datetime  NULL,
    [EnableExtraction] bit  NULL
);
GO

-- Creating table 'CompanyDataExports'
CREATE TABLE [dbo].[CompanyDataExports] (
    [ExportID] int IDENTITY(1,1) NOT NULL,
    [CompanyID] int  NOT NULL,
    [Description] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Participants'
CREATE TABLE [dbo].[Participants] (
    [CompanyID] int  NULL,
    [CompanyName] nvarchar(250)  NULL,
    [ParticipantID] uniqueidentifier  NOT NULL,
    [FirstName] nvarchar(100)  NOT NULL,
    [LastName] nvarchar(100)  NOT NULL,
    [Email] nvarchar(100)  NULL,
    [EmployeeId] nvarchar(25)  NULL,
    [CreateDateTime] datetime  NULL,
    [Phone] nvarchar(25)  NULL,
    [DOB] datetime  NULL,
    [Location] nvarchar(50)  NULL,
    [CustomText1] nvarchar(250)  NULL,
    [CustomText2] nvarchar(250)  NULL,
    [CustomText3] nvarchar(250)  NULL,
    [CustomText4] nvarchar(250)  NULL,
    [CustomText5] nvarchar(250)  NULL,
    [CustomDateTime1] datetime  NULL,
    [CustomDateTime2] datetime  NULL,
    [ExtractionDateTime] datetime  NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] uniqueidentifier  NOT NULL,
    [Username] nvarchar(max)  NOT NULL,
    [Points] decimal(18,0)  NOT NULL,
    [Age] int  NOT NULL,
    [Employee] bit  NOT NULL,
    [DOB] datetime  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [CompanyID] in table 'CompanyConfigs'
ALTER TABLE [dbo].[CompanyConfigs]
ADD CONSTRAINT [PK_CompanyConfigs]
    PRIMARY KEY CLUSTERED ([CompanyID] ASC);
GO

-- Creating primary key on [ExportID] in table 'CompanyDataExports'
ALTER TABLE [dbo].[CompanyDataExports]
ADD CONSTRAINT [PK_CompanyDataExports]
    PRIMARY KEY CLUSTERED ([ExportID] ASC);
GO

-- Creating primary key on [ParticipantID] in table 'Participants'
ALTER TABLE [dbo].[Participants]
ADD CONSTRAINT [PK_Participants]
    PRIMARY KEY CLUSTERED ([ParticipantID] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------