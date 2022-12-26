using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class RR : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RegisterRooms",
                table: "RegisterRooms");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "RegisterRooms",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RegisterRooms",
                table: "RegisterRooms",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_RegisterRooms_StudentId",
                table: "RegisterRooms",
                column: "StudentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RegisterRooms",
                table: "RegisterRooms");

            migrationBuilder.DropIndex(
                name: "IX_RegisterRooms_StudentId",
                table: "RegisterRooms");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "RegisterRooms");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RegisterRooms",
                table: "RegisterRooms",
                columns: new[] { "StudentId", "RoomId" });
        }
    }
}
