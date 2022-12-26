using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class updateRegisterRoomTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RegisterRooms_Students_RoomId",
                table: "RegisterRooms");

            migrationBuilder.AddForeignKey(
                name: "FK_RegisterRooms_Students_StudentId",
                table: "RegisterRooms",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RegisterRooms_Students_StudentId",
                table: "RegisterRooms");

            migrationBuilder.AddForeignKey(
                name: "FK_RegisterRooms_Students_RoomId",
                table: "RegisterRooms",
                column: "RoomId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
