using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Role = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Blocks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blocks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RoomTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumberOfSLot = table.Column<int>(type: "int", nullable: false),
                    Furniture = table.Column<bool>(type: "bit", nullable: false),
                    DomitoryFee = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoomTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Universities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Managers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdentiFyCardNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<bool>(type: "bit", nullable: false),
                    IdCard = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<bool>(type: "bit", nullable: false),
                    AccountId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Managers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Managers_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Room",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SlotRemain = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<bool>(type: "bit", nullable: false),
                    BlockId = table.Column<int>(type: "int", nullable: false),
                    RoomTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Room", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Room_Blocks_BlockId",
                        column: x => x.BlockId,
                        principalTable: "Blocks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Room_RoomTypes_RoomTypeId",
                        column: x => x.RoomTypeId,
                        principalTable: "RoomTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ethnic = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nationnality = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HomeAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MainAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Avartar = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    IdentifyCardNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversitysutdentId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Faculty = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Major = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SchoolYear = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RelatedPersonName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RelatedPersonPhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    status = table.Column<bool>(type: "bit", nullable: false),
                    accountId = table.Column<int>(type: "int", nullable: false),
                    UniversityId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Accounts_accountId",
                        column: x => x.accountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Students_Universities_UniversityId",
                        column: x => x.UniversityId,
                        principalTable: "Universities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BlockManagements",
                columns: table => new
                {
                    BlockId = table.Column<int>(type: "int", nullable: false),
                    ManagerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BlockManagements", x => new { x.ManagerId, x.BlockId });
                    table.ForeignKey(
                        name: "FK_BlockManagements_Blocks_BlockId",
                        column: x => x.BlockId,
                        principalTable: "Blocks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BlockManagements_Managers_ManagerId",
                        column: x => x.ManagerId,
                        principalTable: "Managers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ElectricWaterlogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LogDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ElectricNew = table.Column<int>(type: "int", nullable: false),
                    ElectricOld = table.Column<int>(type: "int", nullable: false),
                    WaterOld = table.Column<int>(type: "int", nullable: false),
                    WaterNew = table.Column<int>(type: "int", nullable: false),
                    WaterUse = table.Column<int>(type: "int", nullable: false),
                    ElectricUse = table.Column<int>(type: "int", nullable: false),
                    ElectricFee = table.Column<int>(type: "int", nullable: false),
                    WaterFee = table.Column<int>(type: "int", nullable: false),
                    TotalFee = table.Column<int>(type: "int", nullable: false),
                    FeeStatus = table.Column<bool>(type: "bit", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ElectricWaterlogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ElectricWaterlogs_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RepairDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RepairDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RepairFee = table.Column<float>(type: "real", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RepairDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RepairDetails_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RegisterRooms",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    RoomId = table.Column<int>(type: "int", nullable: false),
                    DateBegin = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateEnd = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumberOfMonth = table.Column<int>(type: "int", nullable: false),
                    DomitoryFee = table.Column<int>(type: "int", nullable: false),
                    DomitoryFeeStatus = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisterRooms", x => new { x.StudentId, x.RoomId });
                    table.ForeignKey(
                        name: "FK_RegisterRooms_Room_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Room",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RegisterRooms_Students_RoomId",
                        column: x => x.RoomId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Furnitures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    RepairDetailId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Furnitures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Furnitures_RepairDetails_RepairDetailId",
                        column: x => x.RepairDetailId,
                        principalTable: "RepairDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BlockManagements_BlockId",
                table: "BlockManagements",
                column: "BlockId");

            migrationBuilder.CreateIndex(
                name: "IX_ElectricWaterlogs_RoomId",
                table: "ElectricWaterlogs",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Furnitures_RepairDetailId",
                table: "Furnitures",
                column: "RepairDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_Managers_AccountId",
                table: "Managers",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_RegisterRooms_RoomId",
                table: "RegisterRooms",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_RepairDetails_RoomId",
                table: "RepairDetails",
                column: "RoomId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_BlockId",
                table: "Room",
                column: "BlockId");

            migrationBuilder.CreateIndex(
                name: "IX_Room_RoomTypeId",
                table: "Room",
                column: "RoomTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_accountId",
                table: "Students",
                column: "accountId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_UniversityId",
                table: "Students",
                column: "UniversityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BlockManagements");

            migrationBuilder.DropTable(
                name: "ElectricWaterlogs");

            migrationBuilder.DropTable(
                name: "Furnitures");

            migrationBuilder.DropTable(
                name: "RegisterRooms");

            migrationBuilder.DropTable(
                name: "Managers");

            migrationBuilder.DropTable(
                name: "RepairDetails");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Room");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Universities");

            migrationBuilder.DropTable(
                name: "Blocks");

            migrationBuilder.DropTable(
                name: "RoomTypes");
        }
    }
}
